import { useState } from 'react';
import './App.css'
import air from './assets/air.jpg';
import Header from './component/Header';
import ProductDetail from './component/ProductDetail';
import Toast from './component/Toast';
import Footer from './component/Footer';

function App() {
  //장바구니에 감긴 상품 갯수
  const [cartCount, setcartCount] = useState(0);
  //이미지 확대 모달을 보여줄지
  //false=닫힘/true=열림
  const [modalOpen, setModalOpen] = useState(false);

  //장바구니 알림
  const [toastOpen, setToastOpen] = useState(false);

  //장바구니 벝은을 클릭하면  실행
  const addCart = () => {
    setcartCount(cartCount + 1);
    setToastOpen(true);
  }
  //2초 뒤에 알림을 자동으로 숨김
  setTimeout(() => {
    setToastOpen(false)
  }, 2000);
  //이미지 확대 모달
  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <div className='app'>
      {/* 부모 요소의 cartCoun값을 Header에게 props기능으로 전달 */}
      <Header cartCount={cartCount} />

      <main className='container'>
        {/* 상세보기에 전달하는 값 */}
        <ProductDetail image={air}
          onAddCart={addCart}
          onOpenModal={openModal}
        />

      </main>
      {/* modal이 true일 때 */}
      {
        modalOpen && (
          <Modal image={air} onClose={closeModal} />

        )
      }
      {/* toast */}
      {toastOpen && <Toast />}
      <Footer />
    </div>

  )
}

export default App
