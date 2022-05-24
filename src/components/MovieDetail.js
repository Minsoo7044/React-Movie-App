import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function MovieDetail({ id, coverImg, title, summary, year, rating, like_count, runtime, url, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <br></br>
      <div>
        <h2 className={styles.movie__title}>
          {title}
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <div>
          <span>rating: {rating}</span>
        </div>
        <div>
          <span>like_count: {like_count}</span>
        </div>
        <div>
          <span>runtime: {runtime}</span>
        </div>
        <div>
          <a href="{url}">{url}</a>
        </div>
        <br></br>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  )
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  like_count: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetail;