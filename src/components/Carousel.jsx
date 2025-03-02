import { useState, useEffect } from 'react';
import '../App.css';
const itemsData = [
  {
    id: 1,
    title: 'Caffe Latte, a new product',
    price: '$20',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.',
    image: 'images/1.png',
    bgColor: '#9c4d2f'
  },
  {
    id: 2,
    title: 'Strawberry mocha, a new product',
    price: '$20',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.',
    image: 'images/2.png',
    bgColor: '#f5bfaf'
  },
  {
    id: 3,
    title: 'Doppio espresso, a new product',
    price: '$20',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.',
    image: 'images/3.png',
    bgColor: '#dedfe1'
  },
  {
    id: 4,
    title: 'Matcha latte macchiato, a new product',
    price: '$20',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.',
    image: 'images/4.png',
    bgColor: '#7eb63d'
  }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % itemsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + itemsData.length) % itemsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getClassName = (index) => {
    if (index === activeIndex) return 'item active';
    if (index === (activeIndex - 1 + itemsData.length) % itemsData.length) return 'item other_1';
    if (index === (activeIndex + 1) % itemsData.length) return 'item other_2';
    return 'item';
  };

  return (
    <main>
      <section className="carousel next">
        <div className="list">
          {itemsData.map((item, index) => (
            <article key={item.id} className={getClassName(index)}>
              <div className="main-content" style={{ backgroundColor: item.bgColor }}>
                <div className="content">
                  <h2>{item.title}</h2>
                  <p className="price">{item.price}</p>
                  <p className="description">{item.description}</p>
                  <button className="addToCard">Add To Cart</button>
                </div>
              </div>
              <figure className="image">
                <img src={item.image} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            </article>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" onClick={prevSlide}>&lt;</button>
          <button id="next" onClick={nextSlide}>&gt;</button>
        </div>
      </section>
    </main>
  );
};

export default Carousel;
