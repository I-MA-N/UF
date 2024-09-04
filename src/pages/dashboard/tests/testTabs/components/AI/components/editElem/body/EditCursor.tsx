function EditCursor() {
   return (
      <div
         id="circle"
         className="absolute top-0 left-0 hidden items-center justify-center size-6 rounded-full bg-yellow/50 border-[0.5px] border-red pointer-events-none"
      >
         <img src="/images/edit-cursor.png" alt="" />
      </div>
   );
};

export default EditCursor;