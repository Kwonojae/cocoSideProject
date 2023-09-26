import { TbPhotoPlus } from "react-icons/tb";
import InPut from "../ui/InPut";
import Button from "../ui/Button";
import { useState } from "react";
import { uploadImage } from "../../api/uploader";
import { addNewDessert, getCeoProfile } from "../../api/firebase";
import { useQuery } from "react-query";

export default function AddDessertForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [product, setProduct] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState("");
  //TODO: 컴포넌트 분리해야됨 폼 재사용성이 떨어짐 . CardUpdate부분 같은 ui
  const {
    isLoading,
    error,
    data: userCeo,
  } = useQuery(["userCeo"], getCeoProfile);
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }

  const ceoId = userCeo.id;

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    // 파일을 읽어 미리보기 URL 생성
    //FileReader 객체를 생성하고 파일을 읽어 올때 사용한다
    console.log(product);
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
      setProduct((product) => ({ ...product, [id]: value }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    if (!selectedFile) {
      // 이미지를 선택하지 않았을 때
      alert("이미지를 선택하세요!");
      setIsUploading(false);
      return; // 이미지를 선택하지 않았으므로 함수 종료
    } else if (selectedFile) {
      // 이미지를 선택했을 때
      uploadImage(selectedFile)
        .then((url) => {
          console.log(url);
          addNewDessert(product, ceoId, url);
          setSuccess("제품이 추가되었습니다.");
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        })
        .finally(() => {
          setProduct({});
          setSelectedFile(null);
          setPreviewUrl(null);
          setIsUploading(false);
        });
    } else {
      console.error("업로드 실패 관리자 잘못인거같다!", error);
    }
    // if (selectedFile) {
    //   uploadImage(selectedFile) //
    //     .then((url) => {
    //       console.log(url);
    //       addNewDessert(product, ceoId, url);
    //       setSuccess("제품이 추가되었습니다.");
    //       setTimeout(() => {
    //         setSuccess(null);
    //       }, 4000);
    //     })
    //     .finally(() => setIsUploading(false));
    // }
  };
  return (
    <div className="flex flex-col items-center h-full  ">
      <div className="relative flex flex-col w-4/5 items-center rounded-[20px]  mx-auto  bg-clip-border  p-3">
        <div className="mt-2 mb-8 w-full">
          <h4 className="px-2 text-xl font-bold text-navy-700 ">New Dessert</h4>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4 px-2 w-full"
        >
          <div className="flex flex-col  items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
            <div className="flex items-center w-full justify-center bg-grey-lighter mb-28">
              <label className="w-full h-72 flex flex-col items-center   rounded-lg shadow-lg tracking-wide uppercase border  cursor-pointer hover:bg-sky-100 ">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="h-full w-full py-2 sm:h-full sm:w-10/12 object-cover"
                  />
                ) : (
                  <>
                    <span className="mt-2 text-base leading-normal">
                      Select Image file
                    </span>
                    <TbPhotoPlus className="text-3xl flex-grow" />
                  </>
                )}
                <InPut
                  type="file"
                  id="file"
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
                tpye="text"
                id="title"
                value={product.title ?? ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
              <p className="text-sm text-gray-600">디저트 설명</p>
              <textarea
                className="border w-full h-32 bg-gray-50"
                id="description"
                value={product.description ?? ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-end items-center w-full pt-28 ">
              {success && <p className="mr-10">💚 {success} </p>}
              <Button
                text={isUploading ? "업로드중..." : "제품 등록하기"}
              ></Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
