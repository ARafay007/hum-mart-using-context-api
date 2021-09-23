const HeaderImgGrid = () => {
  return (
    <div>
      <div className="header-ImgGrid">
        <div className="header-ImgGrid_left">
          <div>
            <img src="Images/bundle-offers-left-banner-resized.jpg" alt="" />
          </div>
          <div>
            <img src="Images/test-2-meat.jpg" alt="" />
          </div>
        </div>
        <div className="header-ImgGrid_right">
          <img src="Images/will-be-back-banner.jpg" alt="" />
        </div>
      </div>

      <section className="Section-info">
        <div>
          <p>Same/Next Day Delivery</p>
          <p>
            Free delivery on all orders over Rs. 3,000 Rs 100 for orders below
            Rs. 3,000 Flat Rs 200 for Same Day orders
          </p>
        </div>
        <div>
          <p>Cash On Delivery</p>
          <p>You pay when rider comes at your address.</p>
        </div>
        <div>
          <p>Online Support</p>
          <p>Customer support from 9AM - Midnight (021)111 116 278</p>
        </div>
      </section>
    </div>
  );
};

export default HeaderImgGrid;
