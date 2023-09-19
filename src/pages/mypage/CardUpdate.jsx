import { useLocation } from "react-router-dom";
import { uploadImage } from "../../api/uploader";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import InPut from "../../components/ui/InPut";
import Button from "../../components/ui/Button";
import { updateDessert } from "../../api/firebase";

export default function CardUpdate() {
  const {
    state: {
      product,
      product: { id, image, description, title, userId },
    },
  } = useLocation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState("");
  const [uproduct, setUproduct] = useState({
    title: title || "",
    description: description || "",
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    // 파일을 읽어 미리보기 URL 생성
    //FileReader 객체를 생성하고 파일을 읽어 올때 사용한다
    // console.log(product);
    if (id === "file" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        //file이 로드가 완료되면
        setPreviewUrl(e.target.result);
        setSelectedFile(file);
      };
      //파일을 읽어 데이터 변환
      reader.readAsDataURL(file);
    } else {
      setUproduct((uproduct) => ({ ...uproduct, [id]: value }));
    }
  };
  //TODO: 클라우드에 업데이트하고 기존에 있는건 지우는 로직을 짜야되는데 ....
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    if (selectedFile) {
      uploadImage(selectedFile) //
        .then((url) => {
          updateDessert(id, uproduct, url, userId);
          setSuccess("제품이 수정되었습니다.");
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        })
        .catch((error) => {
          console.error("업데이트 오류", error);
        })
        .finally(() => setIsUploading(false));
    } else {
      console.log("  진입합니다");
      updateDessert(id, uproduct, image, userId) //
        .then(() => {
          setSuccess("제품이 수정되었습니다.");
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        })
        .catch((error) => {
          console.error("업데이트 오류:", error);
        })
        .finally(() => setIsUploading(false));
    }
  };
  return (
    <div className="flex flex-col items-center h-full mt-10 ">
      <div className="relative flex flex-col w-4/5 items-center rounded-[20px]  mx-auto  bg-clip-border  p-3">
        <div className="mt-2 mb-8 w-full">
          <h4 className="px-2 text-xl font-bold text-navy-700 ">
            Update Dessert
          </h4>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4 px-2 w-full"
        >
          <div className="flex flex-col  items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
            <div className="flex items-center w-full justify-center bg-grey-lighter mb-28">
              <label className="w-full h-72 flex flex-col items-center px-4 py-6 rounded-lg shadow-lg tracking-wide uppercase border  cursor-pointer hover:bg-sky-100 ">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full"
                  />
                ) : image ? (
                  <img src={image} alt="Preview" className="w-full h-full" />
                ) : (
                  <>
                    <span className="mt-2 text-base leading-normal">
                      Select Image file
                    </span>
                    <TbPhotoPlus className="text-3xl flex-grow" />
                  </>
                )}
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={handleChange}
                  accept="image/*"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
              <p className="text-sm text-gray-600">디저트 이름</p>
              <InPut
                id="title"
                value={uproduct.title}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
              <p className="text-sm text-gray-600">디저트 설명</p>
              <textarea
                className="border w-full h-32 bg-gray-50"
                id="description"
                value={uproduct.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end items-center w-full pt-28 ">
              {success && <p className="mr-10">💚 {success} </p>}
              <Button text={isUploading ? "업로드중..." : "수정하기"}></Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
