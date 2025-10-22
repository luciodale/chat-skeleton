import { Accordion } from "./Accordion";

export type RightSidebarAgentBuilderProps = {
  isVisible: boolean;
};

export function RightSidebarAgentBuilder({
  isVisible,
}: RightSidebarAgentBuilderProps) {
  return (
    <Accordion isVisible={isVisible}>
      <div className="px-2.5 py-2">
        <h1 className="text-lg font-medium text-text-primary">Agent Builder</h1>
        {/* add a lot of text here , more content than the other components */}
        <div className="text-sm text-text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quos.
        </div>
      </div>
    </Accordion>
  );
}
