import css from './Loader.module.css';
import { Triangle } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={css.loader}>
      <Triangle
        visible={true}
        height="50"
        width="50"
        color="rgb(13, 82, 212)"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
