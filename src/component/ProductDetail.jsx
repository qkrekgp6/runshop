import React, { useState } from 'react'

function ProductDetail({ image, onAddCart, onOpenModal }) {
    //현재 선택된 탭을 저장
    //처음에는 detail탭이 선택되어있음
    const [tab, setTab] = useState('detail');

    return (
        <section className='product'>
            {/* 상품이미지 영역 */}
            <div className="product-media">
                <img
                    src={image}
                    alt="에어포스"
                    onClick={onOpenModal} title="클릭하면 확대 이미지르 볼 수 있습니다" />
            </div>
            {/* 상품설명 */}
            <div className="product-body">
                <p className="category">RUNNIMG SHOES</p>
                <h2>에어 포스</h2>
                <p className="desc">가볍고 편안한 데일리 슈즈</p>
                <p className="price">110,000원</p>
                <div className="actions">
                    <button className="btn primary"
                        onClick={onAddCart}>장바구니담기

                    </button>
                    <button className="btn" onClick={onOpenModal}>이미지 확대</button>
                </div>
                {/* 탭버튼 */}
                <div className="tabs">
                    <button className={tab === "detail" ? 'tab active' : 'tab'} onClick={() => setTab('detail')}>상세</button>

                    <button className={tab === "review" ? 'tab active' : 'tab'} onClick={() => setTab('review')}>리뷰</button>

                    <button className={tab === "qna" ? 'tab active' : 'tab'} onClick={() => setTab('qna')}>문의</button>

                </div>
                {/* 선택된 탭 값에 따라서 보여지는 콘텐츠 */}
                <div className="tab-panel">
                    {
                        tab === 'detail' && (
                            <ul className="bullets">
                                <li>캐주얼한 스타일에 잘 어울리는 신발</li>
                            </ul>
                        )
                    }
                    {
                        tab === 'review' && (
                            <div>
                                <p className="review-score">⭐⭐⭐⭐⭐ 5/5</p>
                                <p>"스타일에 기본 템!"</p>
                            </div>
                        )
                    }
                    {
                        tab === 'qna' && (
                            <div>
                                <p><b>Q.</b>정품인가요?</p>
                                <p><b>A.</b>네 나이키 정품입니다.</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductDetail