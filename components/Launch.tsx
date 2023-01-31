import React from 'react';
import { mount } from '../utilities/show';
import mapToJSX from '../utilities/mapToJSX';
import classNames from '../utilities/classNames';
import CloseIcon from './icons/Close';
import RocketIcon from './icons/Rocket';
import SuccessIcon from './icons/Success';
import FailureIcon from './icons/Failure';
import PayloadIcon from './icons/Payload';
import css from '../styles/launch.module.css';

export interface LaunchProps extends Launch {
  showStatus: boolean;
  onButtonClick: (id: string) => void;
}

function Heading({ name, date }: Launch) {
  return (
    <div>
      <strong>{name}</strong>
      <small>{new Date(date).toLocaleString()}</small>
    </div>
  );
}

function StatusHeading({ name, success }: Launch) {
  return (
    <div>
      <small>{`${name} launch`.toUpperCase()}</small>
      <strong>
        {mount(success, 'Was successful')}
        {mount(!success, 'Was a failure')}
      </strong>
    </div>
  );
}

function Body({ core, payloads, success }: Launch) {
  return (
    <>
      <div className={css.body}>
        <div>
          <strong>Status</strong>
          <span className={success ? css.text_success : css.text_failure}>{success ? 'Successful' : 'Failure'}</span>
        </div>

        <div>
          <strong>Core</strong>
          <span>{core}</span>
        </div>
      </div>

      <div style={{ display: 'grid', borderTop: '0.25rem solid var(--black)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
          <strong style={{ textTransform: 'uppercase' }}>Payloads</strong>
          <span>{payloads.length}</span>
        </div>

        {mapToJSX(payloads, PayloadSlot)}
      </div>
    </>
  );
}

function StatusBody({ details, failureReason }: Launch) {
  const hasFailureReason = failureReason !== undefined;
  return (
    <div className={css.body}>
      {mount(hasFailureReason, <strong>Reason</strong>)}
      {mount(hasFailureReason, <p>{failureReason}</p>)}
      <strong>Details</strong>
      <p>{details || 'There is currently no details available'}</p>
    </div>
  );
}

function PayloadSlot(props: Payload) {
  const { id, type } = props;
  return (
    <div className={css.payload}>
      <PayloadIcon />
      <div>
        <strong>{type}</strong>
        <small>{id}</small>
      </div>
    </div>
  );
}

function Launch(props: LaunchProps) {
  const { id, name, image_url, success, showStatus, onButtonClick } = props;
  const statusClassName = success ? css.bg_success : css.bg_failure;
  const className = classNames(css.card, showStatus ? statusClassName : null);
  const headerClassName = classNames(css.header, showStatus ? statusClassName : null);
  const buttonClassName = classNames(css.button, !showStatus ? statusClassName : null);

  const ButtonIcon = success ? SuccessIcon : FailureIcon;
  const onClick = () => onButtonClick(showStatus ? null : id);

  return (
    <div className={className}>
      <header className={headerClassName}>
        <RocketIcon />
        {mount(!showStatus, <Heading {...props} />)}
        {mount(showStatus, <StatusHeading {...props} />)}
      </header>

      {mount(
        !showStatus,
        <div className={css.image_wrapper}>
          <img src={image_url} alt={name} />
        </div>
      )}

      {mount(!showStatus, <Body {...props} />)}
      {mount(showStatus, <StatusBody {...props} />)}

      <button className={buttonClassName} onClick={onClick}>
        {mount(showStatus, <CloseIcon />)}
        {mount(!showStatus, <ButtonIcon />)}
        <span>{showStatus ? 'Close' : 'Details'}</span>
      </button>
    </div>
  );
}

export default Launch;
