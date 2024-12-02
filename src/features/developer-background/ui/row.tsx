type Props = {
  title: string;
  content: string[];
};

export function Row({ title, content }: Props) {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  );
}
