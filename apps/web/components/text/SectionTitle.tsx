interface Props {
  title: string;
}

export function SectionTitle({ title }: Props) {
  return <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>;
}
