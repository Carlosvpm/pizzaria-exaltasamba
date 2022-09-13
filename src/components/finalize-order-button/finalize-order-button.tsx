import { Button } from "react-bootstrap";
import environments from "../../environments/environments";

type FinalizeOrderButtonProps = {
  text: string;
};

export const FinalizeorderButton = (props: FinalizeOrderButtonProps) => {
  const url: string = `https://wa.me/${environments.PHONE_NUMBER}`;
  const text: string = props.text;
  return (
    <div className="d-grid gap-2">
      <Button
        href={url + "?text=" + text}
        target="_blank"
        variant="primary"
        size="lg"
      >
        Finalizar pedido
      </Button>
    </div>
  );
};
