import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { withLayout } from "@ui/layout";
import { UserWidgets } from "@widgets/UserWidgets/ui";
import { ReviewSection } from "@shared/ui/layout/review";

import { useData } from "@shared/helpers/hooks/useData";
import { INews } from "@shared/api/interfaces";
import { ProgramContext } from "@shared/api/dataContext/fake";
import { WithSkeleton } from "@shared/ui/WithSkeleton";

import cn from "classnames";
import styles from "./styles.module.scss";

interface PreMainProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const PreMain: React.FC<PreMainProps> = props => {
  const { data, isLoading, isError } = useData<INews>(() =>
    ProgramContext.getProgramById({ programId: "1" })
  );

  return (
    <div className={cn(styles.userWidgetWrapper, props.className)}>
      <WithSkeleton isLoading={isLoading} isEmpty={data === null}>
        <h1>О Программе</h1>

        {data && <div dangerouslySetInnerHTML={{ __html: data.desc }} />}
      </WithSkeleton>
      <div className={cn(styles.reviewWrapper)}>
        <ReviewSection
          text="Оставить заявку"
          buttonText="Оставить заявку"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default withLayout(PreMain);
