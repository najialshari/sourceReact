const Sources = () => {
  
  const myCarouselElement = document.querySelector('#SourceCarousel')
// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   wrap: false

// })
console.log(myCarouselElement);

  return (

    <>
      <div id="SourceCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
       
        <div className="carousel-inner">
          <div className="carousel-item active" >
            <img src={require("../images/slide1.jpg")} height="800px" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" >
            <img src={require("../images/slide2.jpg")} height="800px" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" >
            <img src={require("../images/slide3.jpg")} height="800px" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#SourceCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#SourceCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )

}

export default Sources