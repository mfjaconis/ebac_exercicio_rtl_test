import { render, screen } from "@testing-library/react";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
	test("Deve renderizar o componente corretamente", () => {
		render(<PostComment />);
		expect(screen.getByText("Comentar")).toBeInTheDocument();
	});
});
