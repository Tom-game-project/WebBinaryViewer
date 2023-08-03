#![allow(dead_code)] // この行でコンパイラのwaringsメッセージを止めます。
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;





#[wasm_bindgen]
pub fn is_png(image_data:Vec<u8>)->bool{
    let png_sig:[u8;8]=[137, 80, 78, 71, 13, 10, 26, 10];
    for (i,j) in png_sig.iter().enumerate(){
        //jはメモリの場所を指しているらしい
        //*jとすることでメモリの指す値を参照することが可能となる 
        if image_data[i]!=*j{
            return false
        }
    }
    return true
}

