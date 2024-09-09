function EditCursor() {
   return (
      <div
         id="circle"
         className="absolute top-0 left-0 hidden items-center justify-center size-6 rounded-full bg-white/50 border border-secondary pointer-events-none"
      >
         <img src="/images/edit-cursor.png" alt="" />
      </div>
   );
};

export default EditCursor;