# TroubleShooting

## 1. cannot initialize a parameter of type 'nsarray id rctbridgemodule <br>
-> react-native 버전이 최신버전이 아닌 경우(강의에서 사용하는 버전은 0.61.5), 빌드 중에 `RCTCxxBridge.mm` 파일의 `_initializeModules:(NSArray<id<RCTBridgeModule>> *)modules` 에서 에러가 발생.<br>
  최신버전에서는 해당 부분이 XCode와 호환되도록 업데이트가 되어있지만, 최신버전이 아닌 경우에는 아래 방법을 통해 에러 해결을 하면 된다.<br>
  * Podfile에서 코드를 수정하는 부분을 추가하여 빌드 중에 자동으로 수정되도록 한다.<br><br>
    * Podfile에 아래의 `post_install` 스크립트와 함수 추가
    ```
    post_install do |installer|
      ## Fix for XCode 12.5 or higher
      find_and_replace("../node_modules/react-native/React/CxxBridge/RCTCxxBridge.mm",
      "_initializeModules:(NSArray<id<RCTBridgeModule>> *)modules", "_initializeModules:(NSArray<Class> *)modules")
    end
    
    def find_and_replace(dir, findstr, replacestr)
      Dir[dir].each do |name|
          text = File.read(name)
          replace = text.gsub(findstr,replacestr)
          if text != replace
              puts "Fix: " + name
              File.open(name, "w") { |file| file.puts replace }
              STDOUT.flush
          end
      end
      Dir[dir + '*/'].each(&method(:find_and_replace))
    end
    ```
    
    참고: https://github.com/facebook/react-native/issues/28405 <br>

## 2. No matching function for call to RCTBridgeModule Name For Class <br>
-> 1번 에러와 마찬가지로 react-native 버전이 최신버전이 아닌 경우, 빌드 중에 RCTBridgeModuleNameForClass 함수를 호출하는 부분에서 에러가 발생.<br>
  최신버전에서는 해당 부분이 XCode와 호환되도록 업데이트가 되어있지만, 최신버전이 아닌 경우에는 아래 방법을 통해 에러 해결을 하면 된다.<br>
  * Podfile에서 코드를 수정하는 부분을 추가하여 빌드 중에 자동으로 수정되도록 한다.<br><br>
    * Podfile에 아래의 `post_install` 스크립트와 함수 추가
    ```
    post_install do |installer|
      ## Fix for XCode 12.5 or higher
          find_and_replace("../node_modules/react-native/ReactCommon/turbomodule/core/platform/ios/RCTTurboModuleManager.mm",
          "RCTBridgeModuleNameForClass(module))", "RCTBridgeModuleNameForClass(Class(module)))")
      end

    def find_and_replace(dir, findstr, replacestr)
      Dir[dir].each do |name|
          text = File.read(name)
          replace = text.gsub(findstr,replacestr)
          if text != replace
              puts "Fix: " + name
              File.open(name, "w") { |file| file.puts replace }
              STDOUT.flush
          end
      end
      Dir[dir + '*/'].each(&method(:find_and_replace))
    end
    ```
    
    참고: https://stackoverflow.com/questions/67287092/react-native-ios-sdk-no-matching-function-for-call-to-rctbridgemodulenamefor <br>
