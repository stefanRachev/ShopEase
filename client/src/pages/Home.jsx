function Home() {
    return (
      <div>
        <section className="hero">
          <h1>Добре дошли в ShopEase!</h1>
          <p>Открий най-добрите продукти на страхотни цени</p>
          <button>Разгледай продуктите</button>
        </section>
  
        <section className="categories">
          <h2>Популярни категории</h2>
          <div className="category-list">
            <div>Обувки</div>
            <div>Дрехи</div>
            <div>Аксесоари</div>
          </div>
        </section>
  
        <section className="best-sellers">
          <h2>Най-продавани продукти</h2>
          {/* Тук ще има карта с продукти */}
        </section>
  
        <section className="testimonials">
          <h2>Отзиви от клиенти</h2>
          <p>„Най-добрите продукти, които съм купувал!“</p>
        </section>
  
        <section className="quick-links">
          <h2>Открий повече</h2>
          <div>
            <a href="/products">Продукти</a>
            <a href="/about">За нас</a>
            <a href="/contact">Контакти</a>
          </div>
        </section>
      </div>
    );
  }
  
  export default Home;
  
