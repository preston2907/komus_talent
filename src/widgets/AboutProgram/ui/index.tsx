import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useData } from "@shared/helpers/hooks/useData";
import { WithSkeleton } from "@ui/WithSkeleton";

import cn from "classnames";
import styles from "./styles.module.scss";
import { INews } from "@shared/api/interfaces";
import { ProgramContext } from "@shared/api/dataContext/fake";

interface AboutProgramProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const AboutProgram: React.FC<AboutProgramProps> = props => {
  const { data, isLoading, isError } = useData<INews>(() =>
    ProgramContext.getProgramById({ programId: "1" })
  );

  return (
    <WithSkeleton isLoading={isLoading} isEmpty={data === null}>
      <div className={cn(styles.root)}>
        {data && <div dangerouslySetInnerHTML={{ __html: data.desc }} />}
      </div>
    </WithSkeleton>
  );
};

export default AboutProgram;
