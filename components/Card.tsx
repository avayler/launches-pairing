import Image from 'next/image';
import css from '../styles/launches.module.css';
import classNames from '../utilities/classNames';
import mapToJSX from '../utilities/mapToJSX';
import { mount } from '../utilities/show';

function Card(props: Launch) {
  const { name, date, core, image_url, success, payloads, failureReason } = props;
  const hasImage = image_url !== null;
  const statusClassName = success ? css.status_success : css.status_failure;
  const footerClassName = classNames(css.card_footer, statusClassName);

  return (
    <div className={css.card}>
      {mount(
        hasImage,
        <div className={css.card_img}>
          <Image src={image_url} width={128} height={128} alt={name} />
        </div>
      )}

      <div className={css.card_body}>
        <h3>{name.toUpperCase()}</h3>
        <small>{date}</small>
      </div>

      <span style={{ textAlign: 'center', padding: 16 }}>{core}</span>
      {mapToJSX(payloads, ({ id, type }) => (
        <div key={id} style={{ display: 'grid', textAlign: 'center', padding: 16, paddingTop: 0 }}>
          <span>{type}</span>
          <small>{id}</small>
        </div>
      ))}

      <div className={footerClassName}>
        {mount(success, <strong>Successfull</strong>)}
        {mount(!success, <strong>Failure</strong>)}
        {mount(!success, <small>{failureReason}</small>)}
      </div>
    </div>
  );
}

export default Card;
