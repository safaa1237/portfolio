import {
  siApachekafka, siDocker, siGrafana, siKubernetes, siMongodb, siNestjs,
  siNextdotjs, siPostgresql, siPrometheus, siPython, siReact, siRedis,
  siSpringboot, siTerraform, siTypescript,
} from "simple-icons";

const logos: Record<string, { path: string }> = {
  PostgreSQL: siPostgresql, MongoDB: siMongodb, Redis: siRedis, Kafka: siApachekafka,
  Grafana: siGrafana, Prometheus: siPrometheus, TypeScript: siTypescript,
  React: siReact, "Next.js": siNextdotjs, Python: siPython, "Spring Boot": siSpringboot,
  NestJS: siNestjs, Kubernetes: siKubernetes, Docker: siDocker, Terraform: siTerraform,
};

export function SkillIcon({ skill }: { skill: string }) {
  const logo = logos[skill];
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" focusable="false">
      {logo ? <path d={logo.path} /> : <path d="M12 2.5 14.3 9.7 21.5 12l-7.2 2.3L12 21.5l-2.3-7.2L2.5 12l7.2-2.3L12 2.5Z" />}
    </svg>
  );
}
