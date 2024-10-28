import { useMemo } from 'react';
import { badges, mainBadges } from '../../utils/badges';
import Badge from './Badge/Badge';
import styles from './BadgeList.module.scss';

const BadgeList = ({ camper, onlyMain }) => {
  const camperBadges = useMemo(
    () =>
      Object.keys(badges).reduce((list, badge) => {
        if (onlyMain && !mainBadges.includes(badge)) return list;

        if (camper[badge]) {
          let cBadge = badges[badge];

          if (cBadge.value) {
            list.push({
              ...cBadge,
              name: cBadge.value(camper),
            });
          } else {
            list.push(badges[badge]);
          }
        }
        return list;
      }, []),
    [camper]
  );

  return (
    <ul className={styles.list} style={{ width: onlyMain ? 410 : '100%' }}>
      {camperBadges.map(badge => (
        <li key={badge.name}>
          <Badge badge={badge} />
        </li>
      ))}
    </ul>
  );
};

export default BadgeList;
