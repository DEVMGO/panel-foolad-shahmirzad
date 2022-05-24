import { MdErrorOutline } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import "./editimage.css";

const EditImage = () => {
  return (
    <div id="editimage">
      <h5 className="title-img">
        <BsCardImage /> تصویر محصول
      </h5>
      <div className="items">
        <div className="item-edittab">
          <div className="title">
            <label>آپلود تصویر</label>
            <MdErrorOutline />
          </div>
          <div className="upload-img">
            <input type="file" />
            <p>
              <span>+</span>
              <span>Upload</span>
            </p>
          </div>
        </div>

        <div className="item-edittab">
          <div className="title">
            <label>آپلود فایل</label>
            <MdErrorOutline />
          </div>
          <div class="mb-3">
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>
        <div className="item-edittab">
          <div className="title">
            <label>آپلود فایل</label>
            <MdErrorOutline />
          </div>
          <div class="mb-3">
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>
        <div className="item-edittab">
          <div className="title">
            <label>آپلود فایل</label>
            <MdErrorOutline />
          </div>
          <div class="mb-3">
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditImage;
