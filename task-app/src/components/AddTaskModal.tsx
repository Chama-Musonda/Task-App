import { Calendar, Flag, Tag } from "lucide-react"
import {ModalContext} from "../context/ModalContext"
import { useContext } from "react";

const AddTaskModal = () => {
  const { setShowModal } = useContext(ModalContext);
  return (
    <div className="absolute top-[20%] inset-0 z-[60] flex items-center justify-center p-4 bg-on-surface/5 h-screen w-full" onClick={() => setShowModal(false)}>
    {/* <!-- Main Modal Container --> */}
    <div
      className="bg-surface-container-lowest min-w-[60%] max-w-xl rounded-lg shadow-[0px_12px_32px_rgba(42,52,57,0.06)] overflow-hidden transition-all duration-300 transform scale-100 opacity-100 border-none ring-1 ring-black/5"
      onClick={e => e.stopPropagation()}>
      <form action="#" className="p-8 space-y-8 z-[80]">
        {/* <!-- Task Title --> */}
        <div className="space-y-2">
          <input autoFocus
            className="w-full text-xl font-bold font-body bg-transparent border-none focus:ring-0 p-0 placeholder:text-surface-dim text-on-surface selection:bg-primary-container"
            placeholder="What needs to be done?" type="text" />
          <div className="h-[2px] w-full bg-gradient-to-r from-primary to-transparent opacity-20"></div>
        </div>
        {/* <!-- Description --> */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">notes</span>
            <span className="text-[14px] font-semibold tracking-wide uppercase">Description</span>
          </div>
          <textarea
            className="w-full bg-surface-container-low border-none rounded-xl p-4 text-body-md focus:bg-primary-container/30 transition-colors focus:ring-0 placeholder:text-on-surface-variant/40 resize-none"
            placeholder="Add more details..." rows={3}></textarea>
        </div>
        {/* <!-- Priority & Date Row --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Priority Select --> */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Flag className="icon-outlined text-[20px]" />
              <span className="text-[14px] font-semibold tracking-wide uppercase">Priority</span>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded-full text-[12px] font-bold bg-primary text-white transition-all active:scale-95 shadow-lg shadow-primary/20"
                type="button">High</button>
              <button
                className="px-4 py-2 rounded-full text-[12px] font-bold bg-secondary-container text-secondary transition-all hover:bg-surface-container-highest active:scale-95"
                type="button">Medium</button>
              <button
                className="px-4 py-2 rounded-full text-[12px] font-bold bg-surface-container-low text-on-surface-variant transition-all hover:bg-surface-container-highest active:scale-95"
                type="button">Low</button>
            </div>
          </div>
          {/* <!-- Category Select --> */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Tag className="material-symbols-outlined text-[20px]"/>
              <span className="text-[14px] font-semibold tracking-wide uppercase">Category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                className="px-4 py-2 rounded-full text-[12px] font-bold bg-indigo-50 text-indigo-600 transition-all hover:bg-indigo-100 active:scale-95"
                type="button">Personal</button>
              <button
                className="px-4 py-2 rounded-full text-[12px] font-bold bg-surface-container-low text-on-surface-variant transition-all hover:bg-surface-container-highest active:scale-95"
                type="button">Meeting</button>
              <button
                className="px-4 py-2 rounded-full text-[12px] font-bold bg-surface-container-low text-on-surface-variant transition-all hover:bg-surface-container-highest active:scale-95"
                type="button">Work</button>
            </div>
          </div>
          {/* <!-- Due Date --> */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Calendar className="material-symbols-outlined text-[20px]" />
              <span className="text-[14px] font-semibold tracking-wide uppercase">Due Date</span>
            </div>
            <div
              className="flex items-center gap-3 bg-surface-container-low px-4 py-2.5 rounded-full text-body-md text-on-surface cursor-pointer hover:bg-surface-container-highest transition-colors">
              <span className="text-sm font-medium">Tomorrow, 10:00 AM</span>
            </div>
          </div>
        </div>
        {/* <!-- Sub-tasks Section --> */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">checklist</span>
            <span className="text-[14px] font-semibold tracking-wide uppercase">Sub-tasks</span>
          </div>
          <div className="space-y-3">
            <button className="flex items-center gap-2 text-primary text-sm font-semibold px-1 group" type="button">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">add_circle</span>
              <span>Add Sub-task</span>
            </button>
          </div>
        </div>
        {/* <!-- Action Buttons --> */}
        <div className="pt-6 flex items-center justify-end gap-4 border-t border-surface-container-highest">
          <button
            className="px-6 py-3 text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors active:scale-95"
            type="button"
            onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button
            className="bg-gradient-to-br from-[#4d44e3] to-[#4034d7] text-white px-8 py-3 rounded-full font-bold text-sm shadow-[0px_8px_20px_rgba(77,68,227,0.3)] hover:shadow-[0px_10px_24px_rgba(77,68,227,0.4)] transition-all active:scale-95 flex items-center gap-2"
            type="submit">
            <span>Create Task</span>
            <span className="material-symbols-outlined text-[18px]">done_all</span>
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddTaskModal