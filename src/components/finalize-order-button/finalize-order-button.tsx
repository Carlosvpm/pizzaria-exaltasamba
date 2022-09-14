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
        size="lg"
        style={{backgroundColor:"#D21D1D"}}
      >
        Finalizar pedido
      </Button>
    </div>
  );
};
