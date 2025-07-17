function LatestFilesUpload() {
  return (
    <div className="w-full flex justify-center items-center py-md bg-light-secondary dark:bg-dark-faint rounded-large">
      <div className="flex items-center gap-2">
        <p className="text-tiny text-dark-tertiary dark:text-light-tertiary font-regular">
          Drop files here or upload files
        </p>

        <button className="py-xs px-sm font-light bg-dark-low hover:bg-dark-soft dark:bg-light-soft hover:dark:bg-light-muted rounded-regular duration-300">
          Upload
        </button>
      </div>
    </div>
  );
}

export default LatestFilesUpload;
