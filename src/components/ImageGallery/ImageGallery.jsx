import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ data, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {data.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          openModal={openModal}
          name={tags}
        />
      ))}
    </ul>
  );
};

// export class ImageGallery extends Component {
//   state = {
//     isOpenModal: false,
//     modalData: null,
//   };

//   openModal = someDataToModal => {
//     console.log('chek open modal', someDataToModal);
//     this.setState({
//       isOpenModal: true,
//       modalData: someDataToModal,
//     });
//   };

//   closeModal = () => {
//     // if (event.currentTarget === event.target) {
//     //   this.props.onClose();
//     // }
//     this.setState({
//       isOpenModal: false,
//       modalData: null,
//     });
//   };

//   render() {
//     const { data } = this.props;
//     return (
//       <div>
//         <ul className={css.ImageGallery}>
//           {data.map(({ id, webformatURL, largeImageURL, tags }) => (
//             <ImageGalleryItem
//               key={id}
//               largeImageURL={largeImageURL}
//               webformatURL={webformatURL}
//               openModal={this.openModal}
//               tags={tags}
//             />
//           ))}
//         </ul>
//         {this.state.isOpenModal && (
//           <Modal
//             modalData={this.state.modalData}
//             closeModal={this.closeModal}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export class ImageGallery extends Component {
//   state = {
//     data: [],
//     error: null,
//     page: 1,
//     perPage: 12,
//     totalPages: 0,
//     status: 'idle',
//   };

// async componentDidUpdate(prevProps, prevState) {
//   const { page, perPage } = this.state;
//   const { keyword } = this.props;
//   if (prevProps.keyword !== keyword || prevState.page !== page) {
//     this.setState({ status: 'pending' });
//     this.setState({ page: 1 });

//     const data = await fetchCardURL(keyword, page, perPage);
//     console.log(data);

//         if (data.hits.length === 0) {
//           return this.setState({ status: 'rejected' });
//         }

//         this.setState(state => ({
//           data: [...data.hits],
//           status: 'resolved',
//           totalPages: Math.ceil(data.totalHits / state.perPage),
//         }));
//       // .catch(error => this.setState({ error, status: 'rejected' }));
//   }
// }

//   addImages = () => {
//     //  const { page, perPage } = this.state;
//     // const { keyword } = this.props;
//     // console.log(this.state.data);
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//     // const data = await fetchCardURL(keyword, page, perPage);
//     //   console.log(data);
//     // axios
//     //   .get(`${BASE_URL}`, {
//     //     params: {
//     //       key: `${KEY}`,
//     //       q: `${this.props.keyword}`,
//     //       page: `${this.state.page + 1}`,
//     //       per_page: `${this.state.perPage}`,
//     //       image_type: 'photo',
//     //       orientation: 'horizontal',
//     //       safesearch: true,
//     //     },
//     //   })
//       // .then(response => {
//       //   if (response) {
//       //     const data = response.data;
//       //     return data;
//       //   }
//       //   return Promise.reject(
//       //     new Error(`Немає фото з такою назвою ${this.props.keyword}`)
//       //   );
//       // })
//       // .then(data => {
//       //   if (data.hits.length === 0) {
//       //     return this.setState({ status: 'rejected' });
//       //   }

//       //   this.setState(state => ({
//       //     data: [...state.data, ...data.hits],
//       //     status: 'resolved',
//       //     totalPages: Math.ceil(data.totalHits / state.perPage),
//       //   }));
//       // // })
//       // .catch(error => this.setState({ error, status: 'rejected' }));
//   };

//   render() {
// const { data, status, totalPages, page } = this.state;
// if (status === 'idle') {
//   return <div> Введіть назву keyWord</div>;
// }
// if (status === 'pending') {
//   return (
//     <div>
//       <Loader />
//       Загружаєм
//     </div>
//   );
// }
// if (status === 'rejected') {
//   return (
// <h1>
//   Sorry, there are no images matching your search query. Please try
//   again.
// </h1>
//   );
// }
// if (status === 'resolved') {
//   return (
//     <div>
//       <ul className={css.ImageGallery}>
//         {data.map(({ id, webformatURL, largeImageURL, tags }) => (
//           <ImageGalleryItem
//             key={id}
//             webformatURL={webformatURL}
//             largeImageURL={largeImageURL}
//             name={tags}
//           />
//         ))}
//       </ul>
//       {totalPages !== page && (
//         <Button onAddImages={this.addImages} />
//       )}
//     </div>
//   );
// }
//   }
// }
