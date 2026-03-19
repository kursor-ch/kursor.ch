interface TierContentProps {
  reportContent: string;
}

export default function TierContent({ reportContent }: TierContentProps) {
  return (
    <section className="space-y-4 py-8 border-b border-gray-100">
      <h2 className="text-xl font-heading font-semibold text-gray-900">
        Ce que cela signifie
      </h2>
      <p className="text-base text-gray-600 leading-relaxed">
        {reportContent}
      </p>
    </section>
  );
}
