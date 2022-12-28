import cx from 'classnames';

import '../styles/services.scss';

export function Service({
  content,
  isCompleted = false,
  isHighlighted = false,
  children
}) {
  return (
    <div className={cx(
      'service',
      { completed: isCompleted },
      { highlighted: isHighlighted && !isCompleted }
    )}
    >
      <p>{content}</p>
      <footer>
        <div>
          {children}
        </div>
      </footer>
    </div>
  );
}