

function Dumbbells() {
 
  const dumbbells = [
    { id: 1, weight: 2.5, price: 15, image: "https://i.imgur.com/sample.jpg" },
    { id: 2, weight: 5, price: 25, image: "https://i.imgur.com/sample.jpg" },
    { id: 3, weight: 7.5, price: 35, image: "https://i.imgur.com/sample.jpg" },
    { id: 4, weight: 10, price: 45, image: "https://i.imgur.com/sample.jpg" },
    { id: 5, weight: 12.5, price: 55, image: "https://i.imgur.com/sample.jpg" },
    // Добави още до 40 кг
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Професионални дъмбели</h1>
      <p className="text-center mb-4">Налични от 2.5 кг до 40 кг, идеални за домашна и професионална употреба.</p>
      <div className="row">
        {dumbbells.map((dumbbell) => (
          <div key={dumbbell.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={dumbbell.image}
                className="card-img-top"
                alt={`Дъмбел ${dumbbell.weight} кг`}
              />
              <div className="card-body">
                <h5 className="card-title">{dumbbell.weight} кг</h5>
                <p className="card-text">Цена: {dumbbell.price} лв</p>
                <button className="btn btn-primary">Купи сега</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dumbbells;
