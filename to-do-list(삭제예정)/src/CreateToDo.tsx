import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "./atoms";
const Input = styled.input`
  background-color: white;
`;

const Btn = styled.button`
  background-color: greenyellow;
  border: none;
  border-radius: 50px; ;
`;
interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      ...oldToDos,
      { text: toDo, id: Date.now(), category },
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("toDo", {
          required: "Please write a to do",
        })}
        placeholder='write a to do'
      />{" "}
      <Btn>+</Btn>
    </form>
  );
}
export default CreateToDo;
