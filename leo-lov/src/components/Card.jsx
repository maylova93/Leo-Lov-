import style from '../style/Card.module.scss';

export const Card = (props) => {
  return (
    <div className={style.cardStyle}>
      <h3 className={style.cardTitle}>{props.title}</h3>
      <p className={style.cardText}>{props.text}</p>
    </div>
  );
};
export const CardContainer = (props) => {
    return <section className={style.containerStyle}>{props.children}</section>;
  };


export default Card