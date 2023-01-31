import React from 'react';
import classNames from '../utilities/classNames';
import { mount } from '../utilities/show';
import css from '../styles/alert.module.css';

type Severity = 'success' | 'danger';
export interface AlertProps {
  title?: string;
  message: string;
  severity?: Severity;
}

function Alert(props: AlertProps) {
  const { title, message, severity } = props;
  const hasTitle = title !== undefined;
  const severityClassName = severity !== undefined ? css[severity] : null;
  const className = classNames(css.root, severityClassName);

  return (
    <div className={className}>
      {mount(hasTitle, <h3>{title}</h3>)}
      <p>{message}</p>
    </div>
  );
}

export default Alert;
