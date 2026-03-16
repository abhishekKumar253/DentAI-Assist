import { Button } from "@/components/ui/button";
import { Show, SignUpButton, SignInButton, UserButton } from "@clerk/nextjs";

function Home() {
  return (
    <div>
      <h1>Home page</h1>

      {/* Logged OUT user */}
      <Show when="signed-out">
        <SignInButton />
        <SignUpButton mode="modal">
          <Button>Sign Up</Button>
        </SignUpButton>
      </Show>

      {/* Logged IN user */}
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
}

export default Home;
