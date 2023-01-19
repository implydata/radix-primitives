import * as React from 'react';
import { useId } from '@implydata/radix-react-id';

export default function IdPage() {
  return (
    <>
      <Foo />
      <Foo />
      <Foo />
      <Foo />
    </>
  );
}

function Foo(props: any) {
  const id = useId(props.id);
  return (
    <div {...props} id={id}>
      Foo {id}
    </div>
  );
}
