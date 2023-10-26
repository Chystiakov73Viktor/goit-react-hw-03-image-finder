import { Component } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

export class Searchdar extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      toast.error('Sorry! Enter a keyword');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>
              <ImSearch style={{ width: 18, height: 18 }} />
            </span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
