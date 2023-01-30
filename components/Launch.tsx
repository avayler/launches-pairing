import React, { useState } from 'react';
import { mount } from '../utilities/show';
import mapToJSX from '../utilities/mapToJSX';
import classNames from '../utilities/classNames';
import CloseIcon from './icons/Close';
import RocketIcon from './icons/Rocket';
import SuccessIcon from './icons/Success';
import FailureIcon from './icons/Failure';
import PayloadIcon from './icons/Payload';
import css from '../styles/launch.module.css';

interface LaunchProps extends Launch {
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
    <div className={css.body}>
      <div>
        <strong>Status</strong>
        <span style={{ color: success ? 'var(--success)' : 'var(--failure)' }}>
          {success ? 'Successful' : 'Failure'}
        </span>
      </div>

      <div>
        <strong>Core</strong>
        <span>{core}</span>
      </div>

      <div>
        <strong>Payloads</strong>
        <span>{payloads.length}</span>
      </div>

      {mapToJSX(payloads, PayloadSlot)}
    </div>
  );
}

function StatusBody({ details, failureReason }: Launch) {
  const hasFailureReason = failureReason !== undefined;
  return (
    <div className={css.body}>
      {mount(hasFailureReason, <strong style={{ textTransform: 'uppercase' }}>Reason</strong>)}
      {mount(hasFailureReason, <p style={{ fontSize: '1.25em', marginBottom: 16 }}>{failureReason}</p>)}
      <strong style={{ textTransform: 'uppercase' }}>Details</strong>
      <p style={{ fontSize: '1.25em' }}>{details || 'There is currently no details available'}</p>
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
  const statusClassName = success ? css.status_success : css.status_failure;
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

      {mount(!showStatus, <Body {...props} />)}
      {mount(showStatus, <StatusBody {...props} />)}

      <footer className={css.footer}>
        <div>
          <img src={image_url} alt={name} className={css.image} />
        </div>

        <div>
          <button className={buttonClassName} onClick={onClick}>
            {mount(showStatus, <CloseIcon />)}
            {mount(!showStatus, <ButtonIcon />)}
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Launch;
