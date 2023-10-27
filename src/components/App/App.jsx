import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchdar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { fetchCardURL } from 'services/api';
import { Modal } from 'components/Modal/Modal';

import css from './App.module.css';

export class App extends Component {
  state = {
    keyword: '',
    data: [],
    page: 1,
    perPage: 12,
    totalPages: 0,
    error: false,
    status: 'idle',
    isOpenModal: false,
    modalData: null,
  };

  async componentDidUpdate(_, prevState) {
    const { page, perPage, keyword } = this.state;

    if (prevState.keyword !== keyword || prevState.page !== page) {
      this.setState({ status: 'pending' });
      try {
        const data = await fetchCardURL(keyword, page, perPage);
        if (data.hits.length === 0) {
          return this.setState({ status: 'rejected' });
        }

        this.setState(state => ({
          data: [...state.data, ...data.hits],
          status: 'resolved',
          totalPages: Math.ceil(data.totalHits / state.perPage),
        }));
      } catch (error) {
        console.log('error', error.message);
        this.setState({ error: true });
      }
    }
  }

  addName = value => {
    if (this.state.keyword === value) {
      return alert(`Sorry! You are already watching ${value}`);
    }
    this.closeModal();
    this.setState({
      keyword: value,
      page: 1,
      data: [],
    });
  };

  addImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = someDataToModal => {
    this.setState({
      isOpenModal: true,
      modalData: someDataToModal,
    });
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      modalData: null,
    });
  };

  render() {
    const { data, status, totalPages, page, error } = this.state;

    return (
      <div className={css.App}>
        <Searchdar onSubmit={this.addName} />
        {status === 'idle' && (
          <div className={css.idle}>Please! Enter a keyword</div>
        )}
        {status === 'pending' && <Loader />}
        {error && (
          <p className={css.rejected}>
            Sorry! Something went wrong, please reload the page.
          </p>
        )}
        {status === 'rejected' && (
          <h1 className={css.rejected}>
            Sorry, there are no images matching your search query. Please try
            again.
          </h1>
        )}
        <ImageGallery data={data} openModal={this.openModal} />
        {totalPages !== page && data.length > 0 && (
          <Button onAddImages={this.addImages} />
        )}
        {this.state.isOpenModal && (
          <Modal
            modalData={this.state.modalData}
            closeModal={this.closeModal}
          />
        )}
        <ToastContainer avtoClose={3000} />
      </div>
    );
  }
}
