'use client';
import ServiceInfo from "./serviceInfo";
import { serviceConfig } from "@/config/service";
import { useSearchParams } from 'next/navigation';

type ServiceKey = keyof typeof serviceConfig;


export default function ServicePage () {

  const searchParams = useSearchParams()
  const search = (searchParams.get('service') || "mea") as ServiceKey;

  return (
    <div>
      {serviceConfig[search].map((service, idx) => (
        <ServiceInfo key={idx} name={service.name} description={service.description} benefits={service.benefits} />
      ))}
    </div>
  );
}
