export function Background() {
  return <></>;
}

export function BasicInfo(user: {
  name: string;
  title: string;
  shortBio: string;
}) {
  return (
    <>
      <h2>{user.title}</h2>
      <h2>{user.name}</h2>
      <h2>{user.shortBio}</h2>
    </>
  );
}
