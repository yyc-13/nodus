import { Controller } from "react-hook-form";
import { WithContext as ReactTags } from "react-tag-input";

export default function TagsInput({ control, tags, setTags, errors }) {
  return (
    <div className=" sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <h2 className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
        add tags ( maximum : 4 )
      </h2>
      <div className="col-span-2">
        <Controller
          name="tags"
          control={control}
          defaultValue={tags}
          render={({ field }) => (
            <ReactTags
              allowDragDrop={false}
              tags={tags}
              handleDelete={(i) => {
                const newTags = tags.filter((tag, index) => index !== i);
                setTags(newTags);
                field.onChange(newTags);
              }}
              handleAddition={(tag) => {
                const newTags = [...tags, tag];
                if (tags.length < 3) {
                  setTags(newTags);
                  field.onChange(newTags);
                }
              }}
              inline
              inputFieldPosition="inline"
              maxLength={30}
            />
          )}
        />
      </div>
      {errors.tags && <p>{errors.tags.message}</p>}
    </div>
  );
}
