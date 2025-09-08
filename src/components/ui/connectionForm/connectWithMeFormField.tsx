export default function ConnectWithMeField({title, message}: any) {
  return (
    <div className="flex flex-col gap-y-3 mt-5">
      <h1 className="font-bold text-md dark:text-white text-black">
        {title}
      </h1>
      {!message ? <input
        type="text"
        className={`${title === "Email" || title === "ایمیل"? "font-inter": "font-iransans" } focus:ring-2 focus:ring-offset-4 dark:ring-offset-background-dark ring-offset-background-light transition-all duration-200 dark:focus:ring-primary-dark hover:ring-primary-light w-full rounded-xl border-[1px] dark:border-neutral-800 border-slate-200 outline-none bg-transparent p-3 font-[400] text-md`}
      />: <textarea className="focus:ring-2 focus:ring-offset-4 dark:ring-offset-background-dark ring-offset-background-light transition-all duration-200 dark:focus:ring-primary-dark hover:ring-primary-light w-full rounded-xl border-[1px] dark:border-neutral-800 border-slate-200 outline-none bg-transparent p-3 font-[400] text-md min-h-[80px] max-h-[500px]"/>}
    </div>
  );
}
