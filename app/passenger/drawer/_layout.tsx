import {
  IconAboutApplication,
  IconDrawerRightArray,
  IconDriver,
  IconLanguageDrawer,
  IconLeftCommonArray,
  IconLock,
  IconLogOut,
  IconPaymentDrawer,
} from "@/assets/icon/Icon";
import { Text, TouchableOpacity, View } from "react-native";

import IButton from "@/lib/buttons/IButton";
import IwtButton from "@/lib/buttons/IwtButton";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { Avatar } from "react-native-ui-lib";
import tw from "twrnc"; // or your preferred tailwind solution

const CustomDrawerContent = (props) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={tw`flex-1 pb-[${insets.bottom}px]`}
    >
      <View style={tw`flex-1 flex-row gap-2`}>
        <View>
          <IButton
            onPress={() => props?.navigation?.closeDrawer()}
            svg={IconDrawerRightArray}
            containerStyle={tw`bg-transparent w-10 h-10 mt-6`}
          />
        </View>
        <View style={tw`flex-1 `}>
          {/* User Profile Section */}
          <View
            style={tw`flex-row pt-4 items-center border-b gap-3 border-gray-200`}
          >
            {/* <View
              style={tw`w-15 h-15 rounded-full bg-gray-300 justify-center items-center mb-2.5`}
            >
              <Text style={tw`text-xl font-bold text-white`}>LY</Text>
            </View> */}
            <View style={tw`mb-2.5`}>
              <Avatar
                containerStyle={tw` bg-gray-300 justify-center items-center `}
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/65be/568f/c2c1207c7799d895e6d7cb113b985966?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iGUXDODfI90BJrZlJTrLvxyVXCmXhkTivTmYFXa-F2-IqtTtP20sEZ4Yh6dpktn7wamMxz-qkZsDWvkhY5w03-YH3L2ozmVplL2asAyPBTHjbiJ0Xj~Amxuf~~mEGXy7gPLGN7jZUChGRpb7Yep29Cu-nmx3ZWPtUct7GBoCW62gTplN-TMAw7I8dUb9o3oKVp51yyj0NGyNpawZNUEFnLK9U4qjR69nySSm1ZJBRHO2~ZEjux-XYzJ8AKDYQcqOgjAyMgRMBa5khzwsZSryr6thMwp4LWEheKlVSn7KBga9CHJAFiW7N2MRbwZeHFaAVflPCpSVsjkQ3rEqG~DSZg__",
                }}
              />
            </View>
            <View>
              <Text style={tw`text-lg font-bold `}>Lana Yolo</Text>
              <Text style={tw`text-sm text-gray-600`}>ID: 05745</Text>
            </View>
          </View>

          {/* Custom Items */}
          <View style={tw`gap-2`}>
            <TouchableOpacity
              onPress={() => {
                router?.push("/passenger/profile");
              }}
              style={tw` pt-4 pb-4.5  flex-row items-center gap-3 justify-between border-b border-gray-200`}
            >
              <View style={tw`gap-3 items-center flex-row`}>
                <SvgXml xml={IconLock} />
                <Text style={tw`text-base text-gray-800`}>
                  Account & security
                </Text>
              </View>
              <SvgXml xml={IconLeftCommonArray} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router?.push("/passenger/payment");
              }}
              style={tw` pt-2 pb-4.5  flex-row items-center gap-3 justify-between border-b border-gray-200`}
            >
              <View style={tw`gap-3 items-center flex-row`}>
                <SvgXml xml={IconPaymentDrawer} />
                <Text style={tw`text-base text-gray-800`}>Payment method</Text>
              </View>
              <SvgXml xml={IconLeftCommonArray} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router?.push("/passenger/about");
              }}
              style={tw` pt-2 pb-4.5  flex-row items-center gap-3 justify-between border-b border-gray-200`}
            >
              <View style={tw`gap-3 items-center flex-row`}>
                <SvgXml xml={IconAboutApplication} />
                <Text style={tw`text-base text-gray-800`}>
                  About application
                </Text>
              </View>
              <SvgXml xml={IconLeftCommonArray} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router?.push("/passenger/language_setting");
              }}
              style={tw` pt-2 pb-4.5  flex-row items-center gap-3 justify-between border-b border-gray-200`}
            >
              <View style={tw`gap-3 items-center flex-row`}>
                <SvgXml xml={IconLanguageDrawer} />
                <Text style={tw`text-base text-gray-800`}>
                  Language settings
                </Text>
              </View>
              <SvgXml xml={IconLeftCommonArray} />
            </TouchableOpacity>
          </View>

          {/* Toggle and Logout */}
          <View style={tw`mt-auto pt-5 px-5 `}>
            <IwtButton
              title="Become a Driver"
              svg={IconDriver}
              onPress={() => {
                router?.push("/passenger/about");
              }}
              containerStyle={tw`mb-4 shadow-md`}
            />
            <TouchableOpacity
              onPress={() => {
                router?.replace("/auth/login");
              }}
              style={tw`py-5 border-t border-gray-200 flex-row items-center gap-2`}
            >
              <SvgXml xml={IconLogOut} />
              <Text style={tw`text-base text-red-500`}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerRoutes = () => {
  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: tw.color("black"),
          drawerInactiveTintColor: tw.color("gray-700"),
          drawerLabelStyle: tw``,
          drawerStyle: tw`w-[85%]`,
        }}
      ></Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerRoutes;
