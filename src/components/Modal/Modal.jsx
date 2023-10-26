import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
    document.body.style.overflow = 'visible';
  }

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  hendleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.modalData;
    return (
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
