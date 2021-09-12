import React from 'react';

interface ListProps<T> {
  items: T[],
  renderItem: (item: T) => React.ReactNode,
  children?: React.ReactNode,
  classes?: string,
}

export default function List<T>(props: ListProps<T>) {
  return (
    <ul className={props.classes}>
      {props.children}
      {props.items.map(props.renderItem)}
    </ul>
  )
}

