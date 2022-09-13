import { Button } from "react-bootstrap";

type FinalizeOrderButtonProps = {};

export const FinalizeorderButton = (props: FinalizeOrderButtonProps) => {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Finalizar pedido
      </Button>
    </div>
  );
};
