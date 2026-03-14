interface CardInfoProps {
  brand: string;
  name: string;
  pdpUrl: string;
}

export function CardInfo({ brand, name, pdpUrl }: CardInfoProps) {
  return (
    <div className="mt-2">
      <p className="text-xs font-bold text-gray-900 leading-tight">{brand}</p>
      <a
        href={pdpUrl}
        className="text-xs text-gray-700 leading-tight hover:underline"
      >
        {name}
      </a>
    </div>
  );
}
