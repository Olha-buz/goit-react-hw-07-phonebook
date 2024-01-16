import css from './Loader.module.css';
import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => (
    <div className={css.loader}>
        <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
        />
    </div>
);
