type FormAction =
  | {
      type: "FullName_Change";
      value: string;
    }
  | {
      type: "Email_Change";
      value: string;
    }
  | {
      type: "Message_Change";
      value: string;
    };

export default function ConnectWithMeField({
  title,
  message,
  tag,
  dispatch,
  state,
}: {
  title: string;
  message?: boolean;
  tag: string;
  state: any;
  dispatch: React.Dispatch<FormAction>;
}) {
  return (
    <div className="flex flex-col gap-y-3 mt-5">
      <h1 className="font-bold text-md dark:text-white text-black">{title}</h1>
      {!message ? (
        <input
          value={tag === "fullName" ? state.fullName : state.email}
          onChange={(e) => {
            if (tag === "fullName") {
              dispatch({ type: "FullName_Change", value: e.target.value });
            } else if (tag === "email") {
              dispatch({ type: "Email_Change", value: e.target.value });
            }
          }}
          type="text"
          className={`${
            title === "Email" || title === "ایمیل"
              ? "font-inter"
              : "font-iransans"
          } focus:ring-2 focus:ring-offset-4 dark:ring-offset-background-dark ring-offset-background-light transition-all duration-200 dark:focus:ring-primary-dark hover:ring-primary-light w-full rounded-xl border-[1px] dark:border-neutral-800 border-slate-200 outline-none bg-transparent p-3 font-[400] text-md`}
        />
      ) : (
        <textarea
          value={state.Message}
          onChange={(e) => {
            if (tag === "message") {
              dispatch({ type: "Message_Change", value: e.target.value });
            }
          }}
          className="focus:ring-2 focus:ring-offset-4 dark:ring-offset-background-dark ring-offset-background-light transition-all duration-200 dark:focus:ring-primary-dark hover:ring-primary-light w-full rounded-xl border-[1px] dark:border-neutral-800 border-slate-200 outline-none bg-transparent p-3 font-[400] text-md min-h-[80px] max-h-[500px]"
        />
      )}
    </div>
  );
}
