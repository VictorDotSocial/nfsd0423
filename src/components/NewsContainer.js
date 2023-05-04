import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsContainer() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Título 1",
      description: "Descripción de la noticia 1 (uno)",
    },
    {
      id: 2,
      title: "Título 2",
      description: "Descripción de la noticia 2",
    },
    {
      id: 3,
      title: "Título 3",
      description: "Descripción de la noticia 3",
    },
    {
      id: 4,
      title: "Título 4",
      description: "Descripción de la noticia 4",
    },
  ]);

  useEffect(() => {
    // AQUÍ TODO LO QUE QUIERO QUE SE EJECUTE EN EL MONTAJE
    // Si loading === true --> haz petición a la API
  }, []);

  const handleClick = () => {
    const newValue = [...news];
    newValue[0].title = "nuevo título de noticia 1";
    setNews(newValue);
  };

  return (
    <>
      <h2>Últimas Noticias</h2>
      {news.map((newsItem) => (
        <NewsItem
          key={newsItem.id}
          title={newsItem.title}
          description={newsItem.description}
        />
      ))}

      <button onClick={handleClick}>Cambiar título</button>

      {/* <NewsItem title={news[0].title} description={news[0].description} />
      <NewsItem title="Título 2" description="Descripción de la noticia 2" />
      <NewsItem title="Título 3" description="Descripción de la noticia 3" />
      <NewsItem title="Título 4" description="Descripción de la noticia 4" /> */}
    </>
  );
}

export default NewsContainer;
