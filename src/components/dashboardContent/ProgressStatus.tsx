function ProgressStatus() {
  const inProgressVal = 51;
  return (
    <div className="flex flex-col items-start gap-1">
      <p className="font-extralight">Status</p>

      <div
        className={`py-1 px-[5.5px] bg-linear-to-r from-0% to-[${inProgressVal}%] from-accent to-dark-faint from-[${inProgressVal}%] to-100% dark:bg-light-soft rounded-regular`}
      >
        <p className="font-strong">
          In Progress <span className="">/</span> {inProgressVal}%
        </p>
      </div>
    </div>
  );
}

export default ProgressStatus;
