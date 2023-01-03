import cx from 'classnames';

import '../styles/services.scss';

export function Service({
  licensePlate,
  vehModel,
  ownerName,
  ownerLoc,
  ownerContact,
  content,
  servicePrice,
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
        <div className='service-info'>
          <h2>{vehModel}</h2>
          <span><h3>{licensePlate}</h3></span>
          <p>{ownerName}</p>
          <p>{ownerContact}</p>
          <p>{ownerLoc}</p>
          <h4>{servicePrice}</h4>
          {children}
        </div>
      </footer>
    </div>
  );
}